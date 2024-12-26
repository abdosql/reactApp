import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShowPage from '../common/ShowPage';

const OperatorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [operatorData, setOperatorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOperatorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/operateurs/${id}/`);
        if (!response.ok) throw new Error('Failed to fetch operator details');
        const data = await response.json();
        setOperatorData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOperatorDetails();
  }, [id]);

  const breadcrumbItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Operators', path: '/operators' },
    { label: `Operator #${id}`, path: `/operators/${id}` }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ShowPage
      title="Operator Details"
      data={operatorData}
      onBack={() => navigate('/operateurs')}
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default OperatorDetails;
