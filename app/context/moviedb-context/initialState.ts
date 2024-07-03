import { DefaultContent } from "../../utils/constants/text-consts";
import { MoviesDBState} from "@App/context/moviedb-context/types";

 const initialState: MoviesDBState = {
  isLoading: false,
  data: [],
  pageNum: 1,
  totalPages: 0,
  totalResults: 0,
  apiError: false,
  pageTitle: DefaultContent.headerTitle,
  searchTerm: ''
};


export default initialState