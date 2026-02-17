import { Title,Group,Button } from "@mantine/core";

const Header = () => {
    return(
        <Group w={"100%"} bg={"red"} display={"flex"} pos={"sticky"} top={0}>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
        </Group>
    )
}

export default Header;