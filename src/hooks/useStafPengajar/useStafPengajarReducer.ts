export type Action =
  | { type: "SET_PAGE"; payload: number }
  | { type: "TOGGLE_FILTER" }
  | { type: "SET_SORT_ORDER"; payload: "asc" | "desc" }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_SELECTED_STATUS"; payload: string | null };

export interface State {
  currentPage: number;
  itemsPerPage: number;
  filterOpen: boolean;
  sortOrder: "asc" | "desc";
  searchQuery: string;
  selectedStatus: string | null;
}

export const initialState: State = {
  currentPage: 1,
  itemsPerPage: 9,
  filterOpen: false,
  sortOrder: "asc",
  searchQuery: "",
  selectedStatus: null,
};

export function stafPengajarReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "TOGGLE_FILTER":
      return { ...state, filterOpen: !state.filterOpen };
    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SELECTED_STATUS":
      return { ...state, selectedStatus: action.payload };
    default:
      return state;
  }
}
