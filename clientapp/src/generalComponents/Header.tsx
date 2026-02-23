import { Title,Group,Button } from "@mantine/core";

const Header = () => {
    return(
        <Group h={"100%"} justify="space-between" p={"sm"}>
            <Title>Tickets App</Title>
            <Group>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </Group>
        </Group>
    )
}

export default Header;