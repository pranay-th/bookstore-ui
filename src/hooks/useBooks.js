// useBooks — placeholder custom hook
// TODO: Fetch books from Redux / API, handle loading & error states

export function useBooks() {
  // TODO: const dispatch = useDispatch();
  // TODO: const { items, loading, error } = useSelector((s) => s.books);
  // TODO: useEffect(() => { dispatch(fetchBooksThunk()); }, [dispatch]);

  return { books: [], loading: false, error: null };
}
