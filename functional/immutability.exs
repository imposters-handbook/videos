#Immutability
defmodule Friend do
  defstruct name: "", age: 0
end

defmodule Immutability do
  def change_name(friend, new_name) do
    Map.put(friend, :name, new_name)
  end
  def get_friend do
    %Friend{name: "Jon"}
  end
end
friend = %{name: "Clara"}
friend = Map.put(friend, :name, "Mike")
IO.inspect friend

Immutability.get_friend |> Immutability.change_name("Jolene") |> IO.inspect


#Idiomatic Elixir
defmodule Cart do
  defstruct items: [], total: 0, count: 0
end

defmodule Shopping do
  def add_item(%Cart{} = cart, %{sku: _, price: price} = item) do
    %{cart | items: cart.items ++ [item], total: cart.total + price, count: cart.count + 1}
  end
  def get_cart, do: %Cart{}
  def save_cart(cart), do: cart
end

Shopping.get_cart
  |> Shopping.add_item(%{sku: "SOCKS", price: 12.22})
  |> IO.inspect


defmodule Ops do
  def square_it(n), do: n * n
  def double_it(n), do: n + n
  def root_it(n), do: :math.sqrt n
  def print_it(n), do: IO.inspect n
end

# Transforming data
4 |> Ops.square_it
  |> Ops.double_it
  |> Ops.root_it
  |> Ops.print_it
