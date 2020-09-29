package ru.vlasoff.blog.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.vlasoff.blog.model.Post;
import ru.vlasoff.blog.repo.PostRepo;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ServiceImpl implements PostService {

    private final PostRepo repo;

    @Autowired
    public ServiceImpl(PostRepo repo) {
        this.repo = repo;
    }

    @Override
    public Post getById(Long id) {
        log.info("IN ServiceImpl getById {}", id);
        Post post = null;
        Optional<Post> optional = repo.findById(id);
        if (optional.isPresent()){
            post = optional.get();
        }
        return post;
    }

    @Override
    public void save(Post post) {
        log.info("IN ServiceImpl save {}", post);
        repo.save(post);
    }

    @Override
    public void delete(Long id) {
        log.info("IN ServiceImpl delete {}", id);
        repo.deleteById(id);
    }

    @Override
    public List<Post> getAll() {
        log.info("IN ServiceImpl getAll");
        return repo.findAll();
    }
}
