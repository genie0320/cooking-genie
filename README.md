# Goals
* User input
* Save input data (Local)
* Keyword search
* Dark theme

# React hooks : 
<https://reactjs.org/docs/hooks-intro.html>
## 기본 Hook
* useState 
```
const [state, setState] = useState(initialState);
```
* useEffect 
```
useEffect( ()=>{},[dependency]);
```
* useContext

## 추가 Hooks
* useReducer
* useCallback
* useMemo
* useRef 
```
const refContainer = useRef(initialValue);
```
* useImperativeHandle
* useLayoutEffect
* useDebugValue

# React router hooks : 
<https://reactrouter.com/docs/en/v6/api>
* useHref
* useLinkClickHandler
* useLinkPressHandler
* useInRouterContext
* useLocation
The useLocation hook returns the location __object__ that represents the __current URL__. It's just like a useState returns a new location whenever the URL changes. 

* useNavigationType
* useMatch
* useNavigate
* useOutlet
* useParams
useParams returns an __object__ of key/value pairs of URL parameters. 

* useResolvedPath
* useRoutes
* useSearchParams
