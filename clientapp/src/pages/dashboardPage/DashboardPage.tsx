import { Card, Group, Stack, Title } from "@mantine/core"
import { DonutChart,BarChart } from '@mantine/charts';

const DashboardPage = () => {
    const data = [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 100, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' },
    ];
    const data2 = [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
    ];

    return(
        <Stack align="stretch" justify="center">
        <Title ta={"center"}>Dashboard Page</Title>
        
        <Group justify="center">
            <Card shadow="md" radius={"md"} bg={"pink"}>
                <Title>Card 1</Title>
            </Card>
            <Card shadow="md" radius={"md"} bg={"blue"}>
                <Title>Card 2</Title>
            </Card>
            <Card shadow="md" radius={"md"} bg={"yellow"}>
                <Title>Card 3</Title>
            </Card>
            <Card shadow="md" radius={"md"} bg={"cyan"}>
                <Title>Card 4</Title>
            </Card>
        </Group>

        <Title ta={"center"}>Tickets Summary</Title>
        <Group justify="space-evenly">
            <DonutChart w={"15%"} data={data}/>
            <BarChart
            h={300}
            w={"40%"}
            data={data2}
            dataKey="month"
            series={[
                { name: 'Smartphones', color: 'violet.6' },
                { name: 'Laptops', color: 'blue.6' },
                { name: 'Tablets', color: 'teal.6' },
            ]}
            tickLine="y"
            />
        </Group>
        
        </Stack>
    )
}

export default DashboardPage;