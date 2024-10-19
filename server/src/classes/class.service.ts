import { Class } from "./class.model";

export const getClassByName = async (name: string) => {
  return await Class.findOne({ name })
}

export const getClassNames = async () => {
  const classList = await Class.find()
  const classNames = classList.map(classDoc => classDoc.name)

  return classNames;
}

export const getFeesPerClass = async (name: string) => {
  const className = await getClassByName(name)
  return className.fees.total;
}