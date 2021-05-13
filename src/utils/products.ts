import { firestore } from "./firebase"

const getProducts = async () => {
  let result = [];
  const snapshot = await firestore.collection("products").get()
  snapshot.docs.forEach((doc) => result.push(doc.data()))
  return result
}

const setProduct = async (product) => {
  return await firestore.collection("products").doc().set(product)
}

export { getProducts, setProduct }
