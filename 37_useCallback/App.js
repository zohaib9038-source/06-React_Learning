import React from 'react'
import Counter from './components/Counter'
import Parent from './components/Parent'
/*
useCallback is used to prevent unnecessary re-renders
when a function is passed as a prop to a child component.

It can improve performance in situations where
unnecessary child re-renders are expensive.

useMemo and useCallback are similar because both
use memoization.

useMemo memoizes a VALUE/result.

useCallback memoizes a FUNCTION itself.

useCallback does NOT directly stop a component from re-rendering.
Usually, it is used with React.memo so that a child component
can skip re-rendering when its props have not changed.
*/

export default function App() {
  return (
    // <Counter/>
    <Parent/>
  )
}
