import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from './pages'
import AuthProvider from './providers/AuthProvider/AuthProvider'
import store from './store'

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<AuthProvider>
				<ChakraProvider>
					<Routing />
				</ChakraProvider>
			</AuthProvider>
		</BrowserRouter>
	</Provider>
)

export default App
