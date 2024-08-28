package com.example.springtest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Spring Bootのアプリケーションであることを示し、コントローラー・サービス・リポジトリの自動設定を行う
@SpringBootApplication
public class SpringtestApplication {

	// 最初に実行される処理
	public static void main(String[] args) {

		// このアプリケーションクラスを実行する。
		SpringApplication.run(SpringtestApplication.class, args);

	}

}
