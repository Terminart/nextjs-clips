import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { WizardForm } from '@/components/organisms/WizardForm'
import { FormInput } from '@/components/molecules/FormInput'
import { FormikConfig } from 'formik/dist/types'
import { path } from '@/types/path'

type Props = Pick<
  FormikConfig<{
    name: string
  }>,
  'initialValues' | 'validationSchema' | 'onSubmit'
>

export const WizardSecond = ({
  initialValues,
  validationSchema,
  onSubmit,
}: Props) => {
  return (
    <Box>
      <PageTitle title={'Wizard: Second page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        back={path.integration.wizard.index}
        next={path.integration.wizard.third}
      >
        {({ errors, touched }) => (
          <FormInput
            error={errors.name}
            touched={touched.name}
            id={'name'}
            label={'Name'}
            isRequired
          />
        )}
      </WizardForm>
    </Box>
  )
}
