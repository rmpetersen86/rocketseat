
import { VStack, Heading, Center } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    passwordconfirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos'),
    passwordconfirm:
        yup.string()
            .required('Informe a confirmação de senha')
            .oneOf([yup.ref('password'), null], 'As senhas não são iguais!')
});

export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    function handleSignUp(data: FormDataProps) {
        console.log(data)
    }

    return (
        <VStack bgColor="violet.300" flex={1} px={10}>
            <Center>
                <Heading
                    my={24}
                    fontSize={32}
                    color={'purple.900'}
                >
                    Crie sua conta
                </Heading>

                {/* Modelo de input com regras inline  */}
                {/* <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: 'Informe o nome',
                        minLength: {
                            value: 5,
                            message: 'O nome precisa ter no mínimo 5 dígitos'
                        }
                    }}
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder="Nome"
                            onChangeText={onChange}
                            errorMessage={errors.name?.message}
                        />
                    )}
                /> */}
                {/* <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'Informe o e-mail',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                        }
                    }}
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder="E-mail"
                            onChangeText={onChange}
                            errorMessage={errors.email?.message}
                        />
                    )}
                /> */}
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder="Nome"
                            onChangeText={onChange}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder="E-mail"
                            onChangeText={onChange}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            errorMessage={errors.password?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="passwordconfirm"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder="Confirme a senha"
                            secureTextEntry
                            onChangeText={onChange}
                            errorMessage={errors.passwordconfirm?.message}
                        />
                    )}
                />

                <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
            </Center>
        </VStack>
    );
}