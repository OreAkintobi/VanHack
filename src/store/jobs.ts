import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {JobsData} from '../types';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch(
    'https://api-interview.vanhack.com/v1/job?skip=0&maxResult=50',
  );
  const resp = await response.json();
  return resp.result.items as JobsData[];
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [] as JobsData[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchJobs.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchJobs.rejected, state => {
      state.loading = false;
    });
  },
});

export default jobsSlice.reducer;
