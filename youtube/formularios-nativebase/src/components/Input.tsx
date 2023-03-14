import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid;
    return (
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
                bg="violet.700"
                fontSize="md"
                h={16}
                isInvalid={invalid}
                placeholderTextColor="violet.300"
                _focus={{
                    bg: "violet.100",
                    borderWidth: 2,
                    borderColor: "violet.500"
                }}
                _invalid={{
                    borderWidth: 2,
                    borderColor: "red.500"
                }}
                {...rest}
            />
            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}