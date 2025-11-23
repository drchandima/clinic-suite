// components/NewPatientForm.js
'use client';

import { useEffect, useState } from 'react';

export default function NewPatientForm({ onSubmit, disabled = false, initial = null }) {
  const [firstName, setFirstName] = useState(initial?.firstName ?? '');
  const [lastName, setLastName] = useState(initial?.lastName ?? '');
  const [nic, setNic] = useState(initial?.nic ?? '');
  const [dob, setDob] = useState(initial?.dob ?? '');
  const [gender, setGender] = useState(initial?.gender ?? '');
  const [phone, setPhone] = useState(initial?.phone ?? '');
  const [address, setAddress] = useState(initial?.address ?? '');
  const [allergies, setAllergies] = useState((initial?.allergies ?? []).join(', '));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initial) {
      setFirstName(initial.firstName ?? ''); setLastName(initial.lastName ?? '');
      setNic(initial.nic ?? ''); setDob(initial.dob ?? ''); setGender(initial.gender ?? '');
      setPhone(initial.phone ?? ''); setAddress(initial.address ?? ''); setAllergies((initial.allergies ?? []).join(', '));
    }
  }, [initial]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!nic) return setError('NIC is required.');
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      nic: nic.trim(),
      dob: dob || null, gender: gender || null, phone: phone || null,
      address: address || null, allergies: allergies ? allergies.split(',').map(s=>s.trim()).filter(Boolean) : []
    };
    setSubmitting(true);
    try {
      await onSubmit(payload);
      // keep NIC in form to create multiple appointments if needed
      // clear others
      // setFirstName(''); setLastName(''); setDob(''); setGender(''); setPhone(''); setAddress(''); setAllergies('');
      alert('Patient saved.');
    } catch (err) {
      setError(err.message || String(err));
    } finally { setSubmitting(false); }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input value={nic} onChange={(e)=>setNic(e.target.value)} placeholder="NIC (ID)" className="w-full p-2 border rounded" />
      <div className="grid grid-cols-2 gap-2">
        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First name" className="p-2 border rounded" />
        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last name" className="p-2 border rounded" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} className="p-2 border rounded" />
        <select value={gender} onChange={(e)=>setGender(e.target.value)} className="p-2 border rounded">
          <option value="">Gender</option>
          <option value="M">Male</option><option value="F">Female</option><option value="O">Other</option>
        </select>
      </div>
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" className="p-2 border rounded" />
      <input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" className="p-2 border rounded" />
      <input value={allergies} onChange={(e)=>setAllergies(e.target.value)} placeholder="Allergies (comma separated)" className="p-2 border rounded" />
      {error && <div className="text-sm text-red-600">{error}</div>}
      <div className="text-right">
        <button disabled={disabled || submitting} type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">{submitting ? 'Saving...' : 'Save patient'}</button>
      </div>
    </form>
  );
}
