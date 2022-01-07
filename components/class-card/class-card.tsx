import React from 'react'
import classNames from 'classnames';

export type ClassCardProps = {
  coverImg: string
  user: {
    name: string
    photoUrl: string
  }
  title: string
  secondaryTitle: string
  bgColor: string
  durationInMinute: number
  tag: string
  tagIcon: React.ReactElement
  className?: string
}

const ClassCard = ({ coverImg, user, title, secondaryTitle, bgColor, durationInMinute, tag, tagIcon, className }: ClassCardProps) => {
  const durationHours = Math.floor(durationInMinute / 60)
  const durationMins = durationInMinute - durationHours * 60

  let duration: string
  if (durationHours === 0) {
    duration = `${durationInMinute}m`
  } else {
    duration = `${durationHours}h`
    if (durationMins) {
      duration += ` ${durationMins}m`
    }
  }

  return (
    <div className={classNames(className, 'rounded-lg relative')} style={{ backgroundColor: bgColor }}>
      <div className="rounded-tl-lg rounded-br-lg absolute top-0 left-0 flex items-center px-4 py-2" style={{ backgroundColor: bgColor }}>
        {tagIcon}
        <span className="ml-2.5 text-base font-semibold uppercase">{tag}</span>
      </div>
      <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded font-semibold text-lg text-gray-900">{duration}</div>
      <div>
        <img src={coverImg} alt={title} width="100%" />
      </div>
      <div className="px-10 py-8">
        <h4 className="font-semibold text-lg pb-3.5">{secondaryTitle}</h4>
        <h3 className="font-bold text-3xl pb-3.5">{title}</h3>
        <div className="flex items-center pb-3.5">
          <img src={user.photoUrl} alt={user.name} />
          <span className="font-semibold pl-2.5 text-xl">{user.name}</span>
        </div>
        <button className="px-5 py-1.5 rounded-full font-semibold text-xl bg-salutation-500">Button</button>
      </div>
    </div>
  )
}

export default ClassCard
