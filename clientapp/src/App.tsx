import { Flex } from '@mantine/core'
import './App.css'
import Header from './generalComponents/Header'
import DashboardPage from './pages/dashboardPage/DashboardPage'

function App() {

  return (
    <Flex
    direction={"column"}
    >
      <Header />
      <DashboardPage />
    </Flex>
  )
}

export default App
