import { useEffect, useState } from 'react';
import { useFurniture } from '../../api/furnitureApi';
import { Link, useNavigate, useParams } from 'react-router';
import { ITEMS_PER_PAGE } from '../../utils/constants';
import { motion } from 'framer-motion';
import { setDocumentTitle } from '../../utils/document';
import Error from '../error/Error';
import useForm from '../../hooks/useForm';

function Catalog() {
    setDocumentTitle("Catalog");
    const navigate = useNavigate();
    const { page } = useParams();
    const pageNum = parseInt(page);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ errorCur, setErrorCur ] = useState('');
    const [ sortOption, setSortOption ] = useState('price-low-to-high');
    const [ loading, setLoading ] = useState(true);
    const [ furniture, allFurnitureLength, error ] = useFurniture(sortOption, pageNum, searchQuery);

    const [formValues, changeFormValues, setFormValue] = useForm({
        'search': '',
    })

    const totalPages = Math.ceil(allFurnitureLength / ITEMS_PER_PAGE); 
    const isLastPage = pageNum === totalPages;

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        setSearchQuery(formValues.search);
    }

    const clearSearchHandler = () => {
        setFormValue({'search': ''});
        setSearchQuery('');
    }

    useEffect(() => {
        if(error){
            setErrorCur(error);
        }
    }, [error]);

    useEffect(() => {
        if (pageNum <= 0) {
            navigate('/catalog/1'); 
        } 
        if(pageNum > totalPages){
            navigate('/catalog/1');
        }   
    }, [navigate, pageNum, totalPages])

    useEffect(() => {
        setLoading(true); 
    }, [searchQuery, sortOption, page]);

    useEffect(() => {
        if (furniture && furniture.length > 0) {
            setLoading(false);
        }
    }, [furniture]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageNum]);

    useEffect(() => {
        if(errorCur){
            setTimeout(() => {
                setErrorCur('');
                navigate('/');
            }, 3000)
        }
    }, [errorCur, navigate]);

    return (
        <>
        {errorCur && <Error errorMsg={errorCur} />} 
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6 mt-15">
                <h2 className="text-4xl font-semibold text-center mb-8">Catalog</h2>

                <div className="flex justify-between items-center mb-6">
                <form 
                    className="w-1/3 flex items-center bg-gray-900 p-2 rounded-md relative" 
                    onSubmit={searchSubmitHandler}
                >
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search products..."
                            className="w-full p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
                            value={formValues.search}
                            onChange={changeFormValues}
                        />
                        
                        {searchQuery && (
                            <button 
                                type="button" 
                                onClick={clearSearchHandler}
                                className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <button 
                        type="submit"
                        className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all duration-300 ml-2"
                    >
                        Search
                    </button>
                </form>
                    <div className="flex gap-4 items-center">
                        <select
                            id="sort"
                            className="p-2 bg-gray-800 text-white rounded-md"
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                            <option value="name-a-to-z">Name: A to Z</option>
                            <option value="name-z-to-a">Name: Z to A</option>
                            <option value="new-to-old">Created: New to Old</option>
                            <option value="old-to-new">Created: Old to New</option>
                        </select>
                    </div>
                </div>
                {loading && searchQuery === '' ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
                    </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {furniture.length > 0 
                    ? furniture
                        .map((item, index) => (
                        <motion.div
                            className='bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700'
                            key={item._id}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/catalog/${item._id}/details`}
                                key={item._id}
                            >
                                <img src={item.image} alt={item.name} className="w-full h-48 object-contain rounded-md mb-4" />
                                <h3 className="text-2xl font-semibold text-center">{item.name}</h3>
                                <p className="text-center text-indigo-400">{item.category}</p>
                                <p className="text-center text-xl mt-3">${item.price}</p>
                            </Link>
                            </motion.div>
                        ))
                    : (<h1 className="text-2xl font-semibold text-center text-gray-400 mt-10">No Items</h1>) }
                </div>
                )}
            </div>
            <div className="flex justify-center mt-8">
                    <button onClick={() => {
                        if(pageNum === 1) return;
                        return navigate(`/catalog/${pageNum - 1}`)
                    }} className={`${pageNum === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-700 text-white hover:bg-indigo-400 cursor-pointer'} px-4 py-2 mx-1`}>
                        Previous
                    </button>
                    <span className="px-4 py-2 mx-1 bg-gray-800 text-white rounded-md">{pageNum}</span>
                    <button disabled={isLastPage || furniture.length === 0} onClick={() => navigate(`/catalog/${pageNum + 1}`)} className={`${isLastPage || furniture.length === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-700 text-white hover:bg-indigo-400 cursor-pointer'} px-4 py-2 mx-1`}>
                        Next
                    </button>
                </div>
        </div>
        </>
    );
}


export default Catalog;