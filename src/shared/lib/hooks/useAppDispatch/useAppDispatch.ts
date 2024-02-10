import { useDispatch } from 'react-redux';
import { AppDispatch } from 'shared/config/storeConfig/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
