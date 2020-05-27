import React from 'react'
import classNames from 'classnames'
import './Tray.scss'
import Piece from 'components/Piece'

const Tray = ({ pieces, color }) => {
  const cx = classNames({
    captured: true,
    [color]: true
  })

  return (
    <section className={cx}>
      {pieces.map(value => (
        <Piece
          key={value.id}
          color={value.color}
          name={value.name}
          position={value.position}
        />
      ))}
    </section>
  )
}

export default Tray
