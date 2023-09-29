import './styles.css'
import { GameCard } from '../GameCard';
import { gameList } from '../../util/game-list';
import { Button } from '../button';
import { useCallback, useEffect, useState } from 'react';

export const SectionList = () => {


  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');


  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    setPosts(gameList.slice(page, postsPerPage));
    setAllPosts(gameList);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    console.log("biladas")
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const testeAgora = () => {
    console.log("biladas2")
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      console.log('aqui')
      return post.name.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;

  return ( 
    
    <div id="game-list">
      <h3>Games</h3>
      <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Digite o nome do jogo"
    />

    <ul className='gamelist'>

      {filteredPosts.length > 0 && (
              filteredPosts.map(game => (
                <GameCard
                  name={game.name}
                  img={game.image}
                  id={game.id}
                  key={game.id}
                />
              ))
      )}

      {filteredPosts.length === 0 && (
        <p>Não existem posts =(</p>
      )}


    </ul>

      <div className="button-container">
        {!searchValue && (
          <Button
            OnClick={loadMorePosts}
            text="+Games" 
          />
        )}
      </div>

    </div>

   );
}
 
