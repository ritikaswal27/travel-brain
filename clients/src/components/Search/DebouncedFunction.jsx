import React, { useState, useEffect } from 'react';

const useDebouncedValue = (value, wait) => {
  const [debouncedQuery, setDebouncedQuery] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(value), wait);
    return () => clearTimeout(id);
  });
  return debouncedQuery;
};

export default useDebouncedValue;
