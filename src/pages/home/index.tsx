import Image from 'next/image';
import { Heading, Text } from '@ignite-ui/react'

import previewImage from '@/assets/app-preview.png'
import { Container, Hero, Preview } from "./styles";
import { ClaimUsernameForm } from './components/ClaimUserNameForm';

export default  function Home() {
    return(
        <Container>
            <Hero>
                <Heading size="4xl">Agendamento descomplicado</Heading>
                <Text size="lg">
                    Conecte seu calendário e permita que as pessoas marquem agendamentos
                    no seu tempo livre.
                </Text>
                <ClaimUsernameForm />
            </Hero>

            <Preview>
                <Image src={previewImage} height={400} alt=''/>
            </Preview>
        </Container>
    )
}