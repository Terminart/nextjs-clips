import { ref, string } from 'yup'

export const emailSchema = string()
  .email('メールアドレスの形式が正しくありません')
  .required('必須入力です')

export const passwordSchema = string()
  .required('必須入力です')
  .min(8, '8文字以上で入力してください')
  .max(64, '64文字以内で入力してください')
  .test(
    'password',
    '大文字、小文字、数字、記号(@?#_&*)を含む文字列を入力してください',
    (value) => {
      if (!value) return false
      if (!/[a-z]/.test(value)) return false
      if (!/[A-Z]/.test(value)) return false
      if (!/[0-9]/.test(value)) return false
      if (!/[@?#_&*]/.test(value)) return false

      return true
    }
  )

export const confirmPasswordSchema = string().oneOf(
  [ref('password'), null],
  'パスワードが一致しません'
)
