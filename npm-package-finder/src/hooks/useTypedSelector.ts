import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TRootState } from '../state/reducers'

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector