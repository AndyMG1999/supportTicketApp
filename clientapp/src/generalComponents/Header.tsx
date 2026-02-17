import { Title,Group,Button } from "@mantine/core";

const Header = () => {
    return(
        <Group w={"100%"} bg={"red"}>
            <Title>Tickets App</Title>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
        </Group>
    )
}

export default Header;