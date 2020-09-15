import rootReducer from '_store/reducers';

export interface ErrorPayload {
  message: string;
  status: number | null;
}

export const setReqState = ({ fetching, success, error }: RequestState) => {
  if (success) {
    return {
      success,
      fetching: false,
      error: false,
    };
  }
  if (fetching) {
    return {
      fetching,
      error: false,
      success: false,
    };
  }
  if (error) {
    return {
      error,
      fetching: false,
      success: false,
    };
  }
};

export interface RequestState {
  fetching?: boolean;
  error?: ErrorPayload | boolean;
  success?: boolean;
}

export type RootState = ReturnType<typeof rootReducer>
