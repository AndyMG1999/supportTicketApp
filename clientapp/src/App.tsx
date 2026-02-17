import { Flex } from '@mantine/core'
import { AppShell } from '@mantine/core';
import './App.css'
import Header from './generalComponents/Header'
import DashboardPage from './pages/dashboardPage/DashboardPage'

function App() {

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header><Header/></AppShell.Header>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export default App
