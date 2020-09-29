package ru.vlasoff.blog.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.vlasoff.blog.model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Long> {
}
