import fetch from 'node-fetch';

const fetchInAccount = async (id) => {
  const response = await fetch(`http://account:3001/admin/accounts/${id}`);
  const data = await response.json();
  return data;
};

const fetchInPayment = async (payload, id) => {
  const description = JSON.stringify(payload);
  const response = await fetch(`http://finance:3003/admin/payments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status: 'CONFIRMED', description }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
  const content = await response.json();
  console.log(content);
};

export { fetchInAccount, fetchInPayment };