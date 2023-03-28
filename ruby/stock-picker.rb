def stock_picker (stock_prices)
  values = 0
  pairs = []

  stock_prices.each_with_index do |price, day|
    j = day + 1
    while j < stock_prices.size
      stock_diff = stock_prices[j] - price
         if stock_diff > values
          values = stock_diff
          pairs = [day, j]
         end
      j += 1
    end
  end
  pairs
end

p stock_picker ([17,3,6,9,15,8,6,1,10])
