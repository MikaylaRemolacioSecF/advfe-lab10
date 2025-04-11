'use client';
import React, { useState, Suspense, lazy } from 'react';

const BigComponent = lazy(() => import('../BigComponent/page'));

export default function DynamicPage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Dynamic Import Example</h1>
      <button onClick={() => setShow(true)}>Load BigComponent</button><br />
      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <BigComponent />
        </Suspense>
      )}
    </div>
  );
}
