import { AppShell } from '@mantine/core';
import Header from './generalComponents/Header'
import DashboardPage from './pages/dashboardPage/DashboardPage'
import { useState } from 'react';

function App() {
  const [closeNav, setCloseNav] = useState(true);

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: closeNav } }}>
      <AppShell.Header><Header closeNav={closeNav} setCloseNav={setCloseNav}/></AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar is collapsed on mobile at sm breakpoint. At that point it is no longer offset by
        padding in the main element and it takes the full width of the screen when opened.
      </AppShell.Navbar>

      <AppShell.Main>
        <DashboardPage/>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
