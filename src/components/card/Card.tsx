import { type CardData } from 'types'

function Card({ icon, title, number, state, rate, detail }: CardData) {
  return (
    <div
      className={['cursor-pointer', 'flex', 'w-full', 'bg-bg-soft', 'rounded', 'p-5', 'gap-5', 'hover:bg-hover'].join(
        ' ',
      )}
    >
      {icon}
      <div className={['flex', 'flex-col', 'gap-5'].join(' ')}>
        <div>{title}</div>
        <div className={['text-2xl', 'font-medium'].join(' ')}>{number}</div>
        <div className={['text-sm', 'font-light'].join(' ')}>
          <span className={[state === 'positive' ? 'text-lime' : 'text-red'].join(' ')}>{rate}%</span>
          {detail}
        </div>
      </div>
    </div>
  )
}

export default Card
