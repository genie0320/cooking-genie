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

# ContextProvider
알다시피, 리액트의 콤포넌트들은 서로 정보를 주고 받기 위해서 prop이라는 걸 사용하는데, 이것이 직계존비속관계가 아니면 복잡해진다. 따라서... 일정한 범위을 단위로 묶고, 해당 범위 내에 들어가는 콤포넌트들이 모두 하나의 global prop뭉치를 이용할 수 있도록 해주는 contextProvider가 등장했다. 사용할 때 주의점은,
* 같은 그룹에 묶인 애들만 동료로 인식한다. 
* contextProvider의 값들이 갱신되면, 여기에 빨대를 꼿고 있는 애들은 몽창 갱신된다. 그러니까 전가의 보도처럼 휘두르지 말자.