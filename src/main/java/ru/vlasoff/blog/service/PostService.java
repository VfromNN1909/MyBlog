package ru.vlasoff.blog.service;

import ru.vlasoff.blog.model.Post;

import java.util.List;

public interface PostService {

    Post getById(Long id);

    void save(Post post);

    void delete(Long id);

    List<Post> getAll();
}
