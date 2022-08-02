import { CategoryTop } from '@/components/templates/CategoryTop'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'
import { LinkWithImageProps } from '@/types/link'
import { path } from '@/types/path'
import { useEffect } from 'react'
import { doc, getDoc, getFirestore } from '@firebase/firestore'

const links: LinkWithImageProps[] = [
  {
    href: path.integration.wizard.index,
    image: '/gallery-tab.jpg',
    title: 'Wizard',
  },
]

const Page: NextPageWithLayout = () => {
  // TODO: サンプル。最終的には不要な処理のため削除する
  useEffect(() => {
    void (async () => {
      console.log('test')
      const db = getFirestore()
      const snapshot = await getDoc(
        doc(db, 'sample-test-mon', 'test-doc')
      ).then((doc) => doc.data())
      console.dir(snapshot)
    })()
  })

  return <CategoryTop links={links} />
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
