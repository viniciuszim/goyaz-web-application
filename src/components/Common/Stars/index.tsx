import React from 'react'

const Star = () => {
  return <i className="fa fa-star" aria-hidden="true"></i>
}
const HalfStar = () => {
  return <i className="fas fa-star-half-alt" aria-hidden="true"></i>
}
const EmptyStar = () => {
  return <i className="far fa-star" aria-hidden="true"></i>
}

const Val05 = () => {
  return (
    <>
      <HalfStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </>
  )
}

const Val10 = () => {
  return (
    <>
      <Star />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </>
  )
}

const Val15 = () => {
  return (
    <>
      <Star />
      <HalfStar />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </>
  )
}

const Val20 = () => {
  return (
    <>
      <Star />
      <Star />
      <EmptyStar />
      <EmptyStar />
      <EmptyStar />
    </>
  )
}

const Val25 = () => {
  return (
    <>
      <Star />
      <Star />
      <HalfStar />
      <EmptyStar />
      <EmptyStar />
    </>
  )
}

const Val30 = () => {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <EmptyStar />
      <EmptyStar />
    </>
  )
}

const Val35 = () => {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <HalfStar />
      <EmptyStar />
    </>
  )
}

const Val40 = () => {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <EmptyStar />
    </>
  )
}

const Val45 = () => {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <HalfStar />
    </>
  )
}

const Val50 = () => {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  )
}

export default function StarComp(val: number) {
  switch (val) {
    case 0.5:
      return <Val05 />
      break
    case 1:
      return <Val10 />
      break
    case 1.5:
      return <Val15 />
      break
    case 2:
      return <Val20 />
      break
    case 2.5:
      return <Val25 />
      break
    case 3:
      return <Val30 />
      break
    case 3.5:
      return <Val35 />
      break
    case 4:
      return <Val40 />
      break
    case 4.5:
      return <Val45 />
      break
    case 5:
      return <Val50 />
      break
    default:
      break
  }
}
