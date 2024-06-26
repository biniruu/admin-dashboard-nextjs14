import type { CardData } from 'types'

interface Props {
  data: CardData
}

function Card({ data }: Props) {
  const { icon, title, number, state, rate, detail } = data

  return (
    <div className="flex w-full cursor-pointer gap-5 rounded bg-bg-soft p-5 hover:bg-hover">
      {icon}
      <div className="flex flex-col gap-5">
        <div>{title}</div>
        <div className="text-2xl font-medium">{number}</div>
        <div className="text-sm font-light">
          <span className={`${state === 'positive' ? 'text-lime' : 'text-red'} pr-2`} data-testid="rate">
            {rate}%
          </span>
          {detail}
        </div>
      </div>
    </div>
  )
}

export default Card
