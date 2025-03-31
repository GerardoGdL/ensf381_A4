import React from 'react';

function DisplayStatus({ type, message }) {
  const styles = {
    success: {
      color: 'green',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
  };

  return (
    <div style={type === 'success' ? styles.success : styles.error}>
      {message}
    </div>
  );
}

export default DisplayStatus;
