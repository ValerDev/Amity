import { EmptyPageFooter } from '../../components/EmptyPageFooter/EmptyPageFooter'
import { EmptyPageHeader } from '../../components/EmptyPageHeader/EmptyPageHeader'
import s from './EmptyPage.module.scss'

export const EmptyPage = () => {
    return <div className={s.EmptyPage}>
        <EmptyPageHeader/>
        <div className={s.EmptyPage}>
            {/* write your code here */}
        </div>
        <EmptyPageFooter/>
    </div>
}