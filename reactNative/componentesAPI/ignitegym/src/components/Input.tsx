import { Input as GluestacInput, InputField } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof InputField>

export function Input({ ...rest }: Props) {
  return (
    <GluestacInput
      bg="$gray700"
      h="$14"
      px="$4"
      borderWidth="$1"
      borderColor='$gray700'
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: "$green500"
      }}
    >
      <InputField
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </GluestacInput>
  )
}