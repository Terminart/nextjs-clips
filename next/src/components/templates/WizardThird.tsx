import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { WizardForm } from '@/components/organisms/WizardForm'
import { FormInput } from '@/components/molecules/FormInput'
import { FormikConfig } from 'formik/dist/types'
import { path } from '@/types/path'

type Props = Pick<
  FormikConfig<{
    age: string
  }>,
  'initialValues' | 'validationSchema' | 'onSubmit'
>

export const WizardThird = ({
  initialValues,
  validationSchema,
  onSubmit,
}: Props) => {
  return (
    <Box>
      <PageTitle title={'Wizard: Third page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        back={path.integration.wizard.second}
        next={path.integration.wizard.fourth}
      >
        {({ errors, touched }) => (
          <FormInput
            error={errors.age}
            touched={touched.age}
            id={'age'}
            label={'Age'}
            isRequired
          />
        )}
      </WizardForm>
    </Box>
  )
}
