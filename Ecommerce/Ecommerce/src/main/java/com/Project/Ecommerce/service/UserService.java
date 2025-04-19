package com.Project.Ecommerce.service;

import com.Project.Ecommerce.model.User;
import com.Project.Ecommerce.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        try
        {
            User newUser= userRepository.save(user);
            System.out.println("User Added to database");
            return newUser;
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return null;
    }

    public User loginUser(String email, String password) {
        //check if user is there or not
        User user= userRepository.findByEmail(email);
        if(user!=null && user.getPassword().equals(password))
        {
            return user;
        }
        return null;//invalid credential
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

