import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionsSnapshotMap,
  firestore,
} from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
    
  } catch (err) {
    yield put(fetchCollectionsError(err.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
