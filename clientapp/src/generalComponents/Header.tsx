import { Title,Group,Button,Burger } from "@mantine/core";

type Props = {
    closeNav: boolean,
    setCloseNav: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = (props:Props) => {
    return(
        <Group h={"100%"} justify="space-between" p={"sm"}>
            <Burger opened={!props.closeNav} onClick={()=>props.setCloseNav(!props.closeNav)} hiddenFrom="sm" size="sm" />
            <Title>Tickets App</Title>
            <Group>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </Group>
        </Group>
    )
}

export default Header;