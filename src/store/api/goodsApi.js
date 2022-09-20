import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://docker.digital-spectr.ru:8888/api/'
  }),
  tagTypes: ['Goods'],
  refetchOnFocus: true,
  endpoints: (build) => ({

    getGoods: build.query({
      query: () => ({
        url: `airports`,
        params: {
          count: 10
        }
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({id}) => ({type: 'Goods', id})), 'Goods']
          : ['Goods'],
    }),

    register: build.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Goods']
    })
  }),
})


export const {useGetGoodsQuery, useRegisterMutation} = goodsApi