import { Alert, Card, Group, Stack, Title } from "@mantine/core"
import { DonutChart,BarChart } from '@mantine/charts';

const DashboardPage = () => {
    const data = [
    { name: 'Completed', value: 300, color: 'teal' },
    { name: 'In-Progress', value: 150, color: 'yellow.6' },
    { name: 'Overdue', value: 50, color: 'red' },
    { name: 'Unassigned', value: 400, color: 'gray.6' },
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

        <Title ta={"center"} order={1}>Tickets Summary</Title>
        <Group justify="space-evenly">
            <Card shadow="md" radius={"md"} w={"20%"}>
                <DonutChart data={data} paddingAngle={10} tooltipDataSource="segment"/>
            </Card>

            <Stack w={"30%"} align="center">
                <Title order={2}>Your Tickets</Title>
                <Alert variant="light" title="2 Overdue" color="red" w={"100%"}/>
                <Alert variant="light" title="1 High Priority" color="blue" w={"100%"}/>
                <Alert variant="light" title="4 Low Priority" color="blue" w={"100%"}/>
                <Alert variant="light" title="3 Unassigned" color="grey" w={"100%"}/>
            </Stack>

            <Card shadow="md" radius={"md"} w={"40%"}>
                <BarChart
                h={300}
                data={data2}
                dataKey="month"
                series={[
                    { name: 'Smartphones', color: 'violet.6' },
                    { name: 'Laptops', color: 'blue.6' },
                    { name: 'Tablets', color: 'teal.6' },
                ]}
                tickLine="y"
                />
            </Card>
        </Group>
        
        </Stack>
    )
}

export default DashboardPage;